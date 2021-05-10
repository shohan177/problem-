

let root = new Vue({
    el: "#root",
    data: {
        users:[],
    },
    methods: {
        getData(){
            axios.get('inc/data.php').then(function (response) {
                console.log(response.data);
            });
        }
       
    },

    created: function () {
        this.getData();
    }




});