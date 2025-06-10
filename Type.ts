// type TYPE = 'object' | 'array' | 'boolean' | 'integer' | 'number' | 'null' | 'string'
// const TYPE = {
//     Object: 'object',
//     Array: 'array',
//     Boolean: 'boolean',
//     Integer: 'integer',
//     Number: 'number',
//     Null: 'null',
//     String: 'string'
// } as const;

// export { TYPE }

class TYPE {
    static Object = Object.freeze(new TYPE('object'))
    static Array = Object.freeze(new TYPE('array'))
    static Boolean = Object.freeze(new TYPE('boolean'))
    static Integer = Object.freeze(new TYPE('integer'))
    static Number = Object.freeze(new TYPE('number'))
    static Null = Object.freeze(new TYPE('null'))
    static String = Object.freeze(new TYPE('string'))

    type: string

    constructor(type: string)
    {
        this.type = type
    }
}



export default TYPE 
/*
import TYPE from './Types.mjs'
*/
