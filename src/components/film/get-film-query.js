const query = `query ($id: ID!){
  Film(id: $id) {
    id
    title
    director
  }
}`;

export default query;
