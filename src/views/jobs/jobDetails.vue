<template>
    <h1>Job Details Page</h1>
    <div v-if="job">
        <h2>{{job.tittle}}</h2>
        <p>The job id is {{id}}</p>
        <p>{{job.details}}</p>
        
    </div>
   
     
</template>

<script>
export default {

    props: ['id'],
    data(){
        return{
            job:null
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>