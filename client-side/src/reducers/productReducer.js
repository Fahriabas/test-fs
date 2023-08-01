const initialState = {
    product: [],
    category: [],
    dashboard: [],
    detailProduct: [],
    currentPage: 1,
    totalPages: 0,
    error: null, // Use null or an empty object instead of undefined
    allCategory: [],
    //area sini isinya category paginasi
    categoryCurrentPage: 1,
    categoryTotalPages: 0
  };


  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          product: action.payload.products,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          error: null,
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'FETCH_CATEGORY_SUCCESS':
        return {
          ...state,
          category: action.payload.categoryList,
          categoryCurrentPage: action.payload.currentPage,
          categoryTotalPages: action.payload.totalPages
        };
      case 'FETCH_DASHBOARD_SUCCESS':
        return {
          ...state,
          dashboard: action.payload
        };
      case 'FETCH_DETAIL_SUCCESS':
        return {
          ...state,
          detailProduct: action.payload
        };
      case 'FETCH_ALLCATEGORY_SUCCESS':
        return{
          ...state,
          allCategory: action.payload
        }
      
      default:
        return state;
    }
  };

export default productReducer