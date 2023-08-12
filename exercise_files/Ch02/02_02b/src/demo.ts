interface Contact {
    id: number
    name: string
    birthDate?: Date

}

let primaryContact: Contact = {
    id: 0,
    name: "",
    birthDate: undefined
}

type ContactName = string