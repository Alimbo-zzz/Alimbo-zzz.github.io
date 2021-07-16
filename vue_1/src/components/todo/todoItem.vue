<template>
	<li class="item">
		<div class="item-box">
			<input type="checkbox" v-model="todo.completed" >
			<span class="num">{{index+1}}</span>
			<span class="text" v-bind:class="{done: todo.completed}">{{todo.title | uppercase}}</span>
		</div>
		<button class="remove" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
	</li>
</template>

<script>
export default{
	props:{
		todo: {
			type: Object,
			required: true,
		},
		index: Number,
	},
	filters:{
		uppercase(value){
			return value.charAt(0).toUpperCase() + value.slice(1);
			/*меняем регистр первой буквы*/
		}
	}
}
</script>


<style scoped>
	.item-box{
		display: flex;
		justify-content: center;
	}

	.item{
		border:1px solid #000;
		margin: 10px 0;
		padding: 5px;
		position: relative;
		transition: 0.3s;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.text{
		display: block;
		margin: 0 10px;
		max-width: 220px;
		margin-right: 10px;

	}
	.done{
		text-decoration: line-through;
	}

	.num{
		margin:0 5px;
	}
	.remove{
		display: block;
		border-radius: 50%;
		transition: 0.3s;
		cursor: pointer;

	}


	.remove:hover{
		background-color: red;
	}


	.item:hover{
		background-color:#2c3e50;
		color: #fff;

	}
</style>