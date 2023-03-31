import { API_URL } from "./config";


const getMealByID = async (mealId) => {
  try {
    const response = await fetch(API_URL + `lookup.php?i=${mealId}`);
    return await response.json();
  } catch (error) {
    console.log("Error parsing JSON:", error);
  }
};

const getAllcategories = async () => {
  try {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
  } catch (error) {
    console.log("Error parsing JSON:", error);
  }
};

const getFilteredByCategory = async (category) => {
  try {
    const response = await fetch(API_URL + `filter.php?c=${category}`);
    return await response.json();
  } catch (error) {
    console.log("Error parsing JSON:", error);
  }
};

export { getMealByID, getAllcategories, getFilteredByCategory };
