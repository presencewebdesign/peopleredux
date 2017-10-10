import $ from 'jquery';

const TodoApi = {
    setTodos (person) {
        if ($.isArray(person)) {
            localStorage.setItem('person', JSON.stringify(person));
            return person;
        }
    },
    filterPersons(person, searchText) {
        let filteredPersons = person;

        // Filter by searchText
        filteredPersons = filteredPersons.filter((person) => {
            console.log(person);
            const name = person.name.toLowerCase();
            return searchText.length === 0 || name.indexOf(searchText) > -1;
        });

        // sort todos with non-completed first
        filteredPersons = filteredPersons.filter((person) => {
            return person;
        });

        return filteredPersons;
    },
};
export default TodoApi;
