const locStorage = {
    setItem: (key, value) => localStorage.setItem(key, value),

    getItem: key => localStorage.getItem(key),

    isItem: key => {
        if (localStorage.getItem(key)) {
            return true;
        } else {
            return false;
        }
    },

    //mira si tiene datos en el localstorage, si es asi, los inserta en el contexto
    checkLocalStorage: (ctx) => {

        if (locStorage.isItem('name')) {
            ctx.name = locStorage.getItem('name');
        }

        if (locStorage.isItem('surname')) {
            ctx.surname = locStorage.getItem('surname');
        }

        if (locStorage.isItem('tag')) {
            ctx.tag = locStorage.getItem('tag');
        }

        console.log('ctx:  ' + ctx)
        console.log('ctx:  ' + ctx.name)
        console.log('ctx:  ' + ctx.surname)
        console.log('ctx:  ' + ctx.tag)

        return ctx;

    },

    checkIsNull: () => {
        if (!locStorage.isItem('name') || !locStorage.isItem('surname') || !locStorage.isItem('tag')) {
            return false
        }

        return true;
    }
};

export default locStorage;