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

class TypeDefinition {
    static Object = Object.freeze(new TypeDefinition('object'))
    static Array = Object.freeze(new TypeDefinition('array'))
    static Boolean = Object.freeze(new TypeDefinition('boolean'))
    static Integer = Object.freeze(new TypeDefinition('integer'))
    static Number = Object.freeze(new TypeDefinition('number'))
    static Null = Object.freeze(new TypeDefinition('null'))
    static String = Object.freeze(new TypeDefinition('string'))

    type: string

    constructor(type: string)
    {
        this.type = type
    }
}



export default TypeDefinition 
/*
import TYPE from './Types.mjs'
*/
