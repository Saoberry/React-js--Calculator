// source de vérité
const initialState = {
    number1 : '',
    number2 : '',
    resultat : ''
 }
 
 // Votre reducer calculatrice
 export default (state = initialState, action = {}) => {
 
    // le switch travail avec le dispatch
    switch (action.type) {
        case "number1":
        case "number2":
            const number = action.type;

            return {
                ...state,
                [number]: action.number
            }
 
        case 'ADDITION':
            return { 
                ...state,
                number1: '',
                number2: '',
                result: Number(state.number1) + Number(state.number2) 
            }
        case "MULTIPLICATION":

                return {
                    ...state,
                    number1: '',
                    number2: '',
                    result: Number(state.number1) * Number(state.number2)
                }

            case "RESET":

                return {
                    ...initialState
                }

        default:
            return state;
     }
 }