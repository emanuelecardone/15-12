Vue.config.devtools = true;

const app = new Vue(
    {

        el: '#root',

        data: {
            numbers: []
        },

        methods: {
            getRandomNumbers: function(){
                axios.get(
                    'url',
                    {
                        params: {
                            key1: 0,
                            key2: 5,
                            key3: 15
                        }
                    }
                ).then((response) => {
                    this.numbers = response.data.response;
                    // Potrei anche fare la stessa cosa pushando nell'array con un ciclo
                });
            }
        },

        created: function(){
            
        }

    }
);