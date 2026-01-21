<script setup>
    import { defineProps, defineEmits } from 'vue';
    
    const props = defineProps({
      categories: Array
    });
    
    const emit = defineEmits(['edit', 'delete']);
    
    const handleEdit = (id) => emit('edit', id);
    const handleDelete = (id) => emit('delete', id);
    const handleViewProducts = (id) => { emit('view-products', id);};
</script>
    
<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th></th> <!-- Alla knappar -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in props.categories" :key="cat.id">
            <td class="td-name">{{ cat.name }}</td>
            <td class="action-col">
              <button class="products_btn" @click="handleViewProducts(cat.name)">Visa produkter</button>
              <button class="update_btn" @click="handleEdit(cat.id)">Uppdatera</button>
              <button class="delete_btn" @click="handleDelete(cat.id)">Ta bort</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>   

<style scoped>
    div {
        justify-content: center;
    }
    table {
        width: 55%;
        margin: auto;
        border-collapse: collapse;
        margin-bottom: 3em;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 0.4em 0.6em;
        text-align: left;
        vertical-align: middle;
        max-width: 150px;
        overflow-wrap: break-word;
    }
    .action-col {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .products_btn {
        background-color: rgb(184, 115, 51);
        color: #3E3E3E;
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 2em;
    }
    .products_btn:hover {
        background-color: rgb(152, 95, 42);
    }
    .update_btn {
        background-color: rgb(184, 115, 51, 0.6);
        color: #3E3E3E;
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 2em;
    }
    .update_btn:hover {
        background-color: rgb(184, 115, 51, 0.8);
    }
    .delete_btn {
        background-color: rgb(184, 51, 51, 0.9);
        color: #3E3E3E;
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .delete_btn:hover {
        background-color: #B83333;
    }
    /* Responsiv tabell */
    @media (max-width: 768px) {
    table, thead, tbody, tr {
        display: block;
        width: 100%;
    }
    thead {
        display: none;
    }
    tbody {
        max-width: 100%;
        width: 90%;
        margin: auto;
    }
    tr {
        margin-bottom: 1em;
        border: 1px solid #ccc;
        padding: 0.6em;
        border-radius: 6px;
    }
    td {
        display: block;
        border: none;
        padding: 0.4em 0;
        max-width: 100%;
    }
    .td-name {
        font-weight: bold;
        margin-bottom: 0.5em;
    }
    .action-col {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
    }
    }
</style>  