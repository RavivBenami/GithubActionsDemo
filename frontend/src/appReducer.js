const mainReducer = (state = { users: [], todos: [], posts: [], clickedArr: [] }, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, users: action.payload.users, todos: action.payload.todos, posts: action.payload.posts };

    case "DELETE_USER":
      let users = state.users;
      let index = users.findIndex((x) => x.id == action.payload);
      if (index >= 0) {
        users.splice(index, 1);
      }
      return { ...state, users: users };

    case "UPDATE_USER":
      let users2 = state.users;
      let index2 = users2.findIndex((x) => x.id == action.payload.id);
      if (index2 >= 0) {
        users2[index2] = action.payload;
      }
      console.log(users2[index2]);

      return { ...state, users: users2 };

    case "MARK_COMPLETED": {
      let id = action.payload;
      let todos = state.todos;
      todos[id - 1].completed = true;
      return { ...state, todos: todos };
    }

    case "CLICKED":
      let id = action.payload;
      let arr = state.clickedArr
      for(let i =0;i<state.users.length;i++){
          arr[i]=false
      }
      arr[id] = true;
      return { ...state, clickedArr: arr };

    case "ADD_TODO":{

       let arr = state.todos
       arr.push(action.payload)
       return {...state,todos:arr}
    }

    case "ADD_POST":{
       let arr =  state.posts
       arr.push(action.payload)
       return {...state,posts:arr}
    }
    
    case "ADD_USER":{

      let user = action.payload
      user.id = state.users.length+1
      let arr = state.users
      arr.push(user)
      return {...state,users:arr}
    }
    

    default:
      return { ...state };
  }
};

export default mainReducer;
