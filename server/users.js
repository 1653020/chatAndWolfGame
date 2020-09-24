const users = []

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const addUser = ({ id, name }) => {
    let color = getRandomColor()
    name = name.trim().toUpperCase()

    const exitstingUser = users.find((user) => user.name === name)
    if (exitstingUser) {
        return { error: 'Username is taken' }
    }

    const user = { id, name, color }

    users.push(user)

    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getAllUser = () => {
    return users
}

const getAdmin = () => {
    return users[0]
}

module.exports = { addUser, removeUser, getUser, getAllUser, getAdmin }