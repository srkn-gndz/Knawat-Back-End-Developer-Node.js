

class ApiService {

    constructor() {

    }

    index = async (req: any): Promise<any> => {
        return 'Hello World ?'
    }

    user =  async (req: any): Promise<any> => {
        try {
            const {fullname, password} = req.body.data; 

            return {
                fullname: fullname,
                password: password,
                status: 'success'
            }
        } catch (error) {
           return {
               status: 'error',
               data: {
                   error: error
               }
           } 
        }
    }
}

export default ApiService