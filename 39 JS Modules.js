//* JavaScript Modules
//* Named Exports
{
    //export const name = "Jesse";
    //export const age = 40;
}

// หรือ
{
    const name = "Jesse";
    const age = 40;
    
    //export {name, age};
}

//* Default Exports
{
    const message = () => {
        const name = "Jesse";
        const age = 40;
        return name + ' is ' + age + 'years old.';
        };
        
    // export default message;
}

//* Import
{
    //import { name, age } from "./person.js";
}

//* Import from default exports
{
    //import message from "./message.js";
}