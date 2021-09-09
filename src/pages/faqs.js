import React from 'react';

const AccordionItem = (props) => {
    const { data, index } = props;
    return (
        <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={'faqHeading' + index}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={'#faqCollapse' + index}
                    aria-expanded="true"
                    aria-controls={'faqCollapse' + index}>
                    {data.title}
                </button>
            </h2>
            <div
                id={'faqCollapse' + index}
                className={'accordion-collapse collapse'}
                aria-labelledby={'faqHeading' + index}
                data-bs-parent="#faqQuestions">
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: data.text }}></div>
            </div>
        </div>
    );
};

export default () => {
    const content = [
        {
            title: `How should I handle callback failure?`,
            text: `If the callback fails for any reason you will need to send the user through the auth flow again.`,
        },
        {
            title: `Can I use a wildcard in my redirect URI?`,
            text: `The OAuth 2.0 spec (section 3.1.2 of RFC 6749) requires that a
            redirection URI must be an absolute URI. The use of wildcards in
            redirect URI is not supported.`,
        },
        {
            title: `What type of integrations are supported by enableHR Open API?`,
            text: `enableHR Open API support integrations via three-legged OAuth2. We
            support the authorization_code grant and refresh_tokens`,
        },
        {
            title: `What is the expiration for an access token?`,
            text: `Access tokens are valid for 30 minutes`,
        },
        {
            title: `What is the expiration for a refresh token?`,
            text: `Unused refresh tokens expire after 14 days. If you don&apos;t refresh your
            access token within 14 days the user will need to reauthorize your
            app. When you perform a token refresh, you should replace your
            existing refresh token with the new one returned in the response. If
            for whatever reason, you don't receive the response you can retry
            refreshing your existing refresh token for a grace period of 30
            minutes.`,
        },
        {
            title: `What OAUTH2 client can I use?`,
            text: `You can use any OAUTH2 client to connect to our Authentication Authorisation Server (AAS). We have used Spring Security OAUTH, Spring Security 5 libraries, and POSTMAN to test our API’s`,
        },
        {
            title: `What are configurations you need?`,
            text: `The configurations you would need to connect to our AAS are as follows:<br/><br/>
                <table>
                    <thead>
                        <tr>
                            <td>Item</td>
                            <td>Comments</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Client ID</td>
                            <td>We will provide this to customer</td>
                        </tr>
                        <tr>
                            <td>Client Secret</td>
                            <td>We will provide this to customer</td>
                        </tr>
                        <tr>
                            <td>Client Authentication Method</td>
                            <td>Basic</td>
                        </tr>
                        <tr>
                            <td>Redirect Uri Template</td>
                            <td>A URL on customer server where we redirect to once their user has authenticated an approved access. Customer will provide this to us</td>
                        </tr>
                        <tr>
                            <td>Authorization Uri</td>
                            <td>https://login.enablehr.com/oauth/authorize</td>
                        </tr>
                        <tr>
                            <td>Token Uri</td>
                            <td>https://login.enablehr.com/oauth/token</td>
                        </tr>
                        <tr>
                            <td>Check Token Uri</td>
                            <td>https://login.enablehr.com/oauth/check_token</td>
                        </tr>
                        <tr>
                            <td>User Info Uri</td>
                            <td>https://rest.enablehr.com/users/self</td>
                        </tr>
                        </tbody>
                    </table>`,
        },
        {
            title: `How does the typical OAuth2 flow looks like for enableHR Open API?`,
            text: `On your website, there would be a link to connect to enableHR. When the user clicks on the link they would be redirected to https://login.enablehr.com/oauth/authorize?client_id=&lt;CLIENT ID&gt;r&redirect_uri=&lt;YOUR REDIRECT URI&gt;&response_type=code&scope=&lt;SCOPES REQUESTED&gt;&state=&lt;SOME STATE TO VERIFY&gt;.

            This will bring up the enable HR login page. Users will have to type in their username and password and approve any scopes that were requested above.

            When the user login to our Authentication and Authorisation Server, an approvals screen will appear and the user will need to approve the scopes prior to retrieving the token. If no scopes are approved you will not receive a token.

            If this is successful a code will be provided in the redirect URI https://&lt;YOUR REDIRECT URI&gt;?code=N_aFQt&state=&lt;SOME STATE TO VERIFY&gt;.

            You can use the code to now get the access token and refresh token from the Token Uri given above. You can verify the token using the Check Token Uri given above.

            Any subsequent calls to our https://rest.enablehr.com would use the above Access Token in the Authentication header. Authentication: Bearer &lt;the access token goes here&gt;. And the scopes requested are from our YAML.`,
        },
        {
            title: `How do I get the Client ID and Client Secret?`,
            text: `Client ID is shared via email to an authorised user. Client Secret is shared via email within the attached zip file. The zip file is encrypted and the password to open the file will be provided to you by SMS to the authorised user. The zip file contains one line which is the client secret. You will need to ensure to keep this safe as this will allow an intruder to access your data on enableHR.`,
        },
        {
            title: `What is Redirect URI?`,
            text: `This redirect URI endpoint is where you will receive the OAUTH2 auth code. The auth code will then need to be exchanged for the OAUTH2 access token. The access token can then be used in subsequent calls to retrieve data from enableHR.`,
        },
    ];
    return (
        <div className="faqs">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion" id="faqQuestions">
                {content.map((item, key) => {
                    return <AccordionItem data={item} index={key} key={key} />;
                })}
            </div>
        </div>
    );
};
