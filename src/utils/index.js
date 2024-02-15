const edamamAppId = "ba59390f";
const edamamApiKey = "460b2d1289880fc072386be21145444d";

export async function fetchRecipes(filter) {
  const { query, limit } = filter;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${edamamAppId}&app_key=${edamamApiKey}&from=0&to=${limit}&`;
  const response = await fetch(url);
  const data = await response.json();
  return data?.hits;
}


export async function fetchRecipe(id){
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${edamamAppId}&app_key=${edamamApiKey}`
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
}
