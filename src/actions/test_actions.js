// Define Type 
export const DATA = 'DATA'; 

// Test Actions
export default TestActions = {};

// GET DATA  
TestActions.GET_DATA = function (url) {
    
    return (dispatch) => {
        
        fetch(url, {
            method: 'GET'
        })
        .then((response) => {
            
            if (!response.ok) {
                throw Error("HTTP REQUEST FAILED", response.statusText);
            }
            
            return response;
        })
        .then((response) => response.json())
        .then((responseData) => {
    
            const getIndex = () => {
                return Math.floor(Math.random() * responseData.length) + 1;  
            }    

            return dispatch({
                type: DATA,
                image: responseData[getIndex()].url
            });

        })
        .done();

    }
}