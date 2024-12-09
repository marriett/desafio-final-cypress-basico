const { faker } = require('@faker-js/faker')

export default {
    createUser: function() {
        let dados = {
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "zipCode": faker.location.zipCode(),
        }

        return dados
    }
}