interface Contact {
    id: number;
    name: string;
    clone(name: string): Contact
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a: Contact = {
    id: 123, name: "Homer Simpson",
    clone: function (name: string): Contact {
        throw new Error("Function not implemented.");
    }
};
const b = clone(a)