const {
    loadSpec,
    getRefComponent,
    loadPaths,
    getExampleValue,
    loadSchema,
    listAllPropertiesOfSchema,
} = require('../parser');

const sampleSchema = {
    properties: {
        firstName: {
            description: 'First name of the candidate',
            example: 'Michael',
            maxLength: 128,
            nullable: false,
            type: 'string',
        },
        surname: {
            description: 'Surname or last name of the candidate',
            example: 'Johnson',
            maxLength: 255,
            nullable: false,
            type: 'string',
        },
        dateOfBirth: {
            description: 'Birthdate of the candidate (accepted format is YYYY-MM-DD)',
            example: '1974-05-21',
            maxLength: 10,
            pattern: '^\\d{4}-\\d{2}-\\d{2}$',
            type: 'string',
        },
    },
};

const sampleSchemaWithRef = {
    $ref: '#/components/schemas/EmployeesPage',
};

const spec = require('../../content/enablehr.json');

describe('loadSpec', () => {
    it('loadSpec', async () => {
        const api = await loadSpec(spec);
        expect(api.paths).not.toBe(undefined);
    });
});

describe('loadPaths', () => {
    it('loadPaths', async () => {
        const paths = await loadPaths(spec);
        expect(Object.prototype.toString.call(paths)).toBe('[object Array]');
        expect(paths.includes('/ping')).toBe(true);
    });
});

describe('getExampleValue', () => {
    it('getExampleValue', () => {
        const value = getExampleValue(sampleSchema, spec);
        expect(value.firstName).toBe('Michael');

        const valueWithRef = getExampleValue(sampleSchemaWithRef, spec);
        expect(valueWithRef.data).not.toBe(undefined);
    });
});

describe('getRefComponent', () => {
    it('getRefComponent', async () => {
        const $ref = '#/components/schemas/EmployeesPage';
        const comp = await getRefComponent($ref, spec);
        expect(comp.properties).not.toBe(undefined);
        expect(comp.type).toBe('object');
    });
});

describe('loadSchema', () => {
    it('loadSchema response 200 object', async () => {
        const response200 = {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/EmployeesPage',
                    },
                },
            },
            description:
                'The request was successful, the response contains an array of employees (in summary form) in the account, wrapped in pagination information.',
        };
        const schema = await loadSchema(response200, spec);
        expect(schema.$ref).toBe('#/components/schemas/EmployeesPage');
    });

    it('loadSchema empty object', async () => {
        const obj = {};
        const schema = await loadSchema(obj, spec);
        expect(schema).toBe(undefined);
    });

    it('loadSchema Ping object with $ref', async () => {
        const obj = {
            $ref: '#/components/schemas/Ping',
        };
        const schema = await loadSchema(obj, spec);
        expect(schema.properties.status).not.toBe(undefined);
        expect(schema.type).toBe('object');
    });

    it('loadSchema EmployeesPage object with $ref', async () => {
        const obj = {
            $ref: '#/components/schemas/EmployeesPage',
        };
        const schema = await loadSchema(obj, spec);
        expect(schema.properties).not.toBe(undefined);
        expect(schema.type).toBe('object');
    });
});

describe('listAllPropertiesOfSchema', () => {
    it('contains properties only', async () => {
        const allProperties = await listAllPropertiesOfSchema(sampleSchema.properties, spec);
        expect(allProperties.length).toBe(Object.keys(sampleSchema.properties).length);
    });

    it('properties with $ref', async () => {
        const employeeInputDetail = {
            branchId: {
                description: 'Branch ID of the employee',
                example: '4eb62cb48c9f429c93bc26664c1a5a4d',
                maxLength: 64,
                minLength: 1,
                type: 'string',
            },
            title: {
                example: 'Mr',
                maxLength: 128,
                type: 'string',
            },
            firstName: {
                description: 'First name of the employee',
                example: 'Michael',
                maxLength: 128,
                minLength: 1,
                type: 'string',
            },
            middleName: {
                description: 'Middle name of the employee',
                example: 'K',
                maxLength: 255,
                type: 'string',
            },
            personalAddress: {
                $ref: '#/components/schemas/AddressDetail',
            },
            postalAddress: {
                $ref: '#/components/schemas/AddressDetail',
            },
            contacts: {
                $ref: '#/components/schemas/RecordContactDetail',
            },
            gender: {
                $ref: '#/components/schemas/Genders',
            },
        };

        const allProperties = await listAllPropertiesOfSchema(employeeInputDetail, spec);
        expect(allProperties[0].name).toBe('branchId');
    });

    it('properties with type array', async () => {
        const recordBankAccountsInput = {
            au: {
                $ref: '#/components/schemas/RecordBankAccountInputAUList',
            },
            nz: {
                $ref: '#/components/schemas/RecordBankAccountInputNZList',
            },
        };

        const allProperties = await listAllPropertiesOfSchema(recordBankAccountsInput, spec);
        expect(allProperties[0].type).toBe('array');
    });
});
