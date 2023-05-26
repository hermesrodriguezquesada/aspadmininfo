export interface User {
    email: string;
    password: string;
  }
  
  export interface UserResponse {
    type: string;
    message: string;
    status: string;
    data: {
      token: string;
      user: {
        firstName: string;
        id: number;
      };
    };
  }
  
