export const mockApi = (url, options) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (options.method === 'POST' && url === 'http://localhost:4000/api/execute') {
                const { code, language } = JSON.parse(options.body);
                
                let output = '';
                
            
                if (language === 'javascript' && code.includes('console.log("Hello, World!")')) {
                    output = 'Hello, World in Js!';
                } else if (language === 'python' && code.includes('print("Hello, World!")')) {
                    output = 'Hello, World in Python!';
                } else {
                    output = 'Error: Code did not produce expected output.';
                }
                
                if (output.startsWith('Error:')) {
                    reject({ 
                        status: 400, 
                        message: output 
                    });
                } else {
                    resolve({
                        status: 'success',
                        data: {
                            output: output,
                        },
                    });
                }
                
            } else {
                reject({
                    status: 404,
                    message: 'Маршрут не найден',
                });
            }
        }, 1000); 
    });
};