<script setup>
    import { defineProps, defineEmits } from 'vue';
    
    // Tar emot en lista med produkter som prop
    const props = defineProps({
      products: {
        type: Array,
        required: true
      }
    });
    
    // Skapar events som skickas till föräldern när man klickar på knapparna
    const emit = defineEmits(['edit', 'delete']);
    
    // Lokala funktioner som skickar vidare produktens id
    const handleEdit = (id) => emit('edit', id);
    const handleDelete = (id) => emit('delete', id);
</script>
    
<template>
    <table>
        <thead>
            <tr>
                <th>Bild</th>
                <th>Artikelnummer</th>
                <th>Namn</th>
                <th class="desc-col">Beskrivning</th>
                <th>Kategori</th>
                <th>Pris (kr)</th>
                <th>Lagersaldo</th>
                <th></th> <!-- Uppdatera- & ta bort-knapp -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in props.products" :key="product.id">
                <td class="image-col" data-label="Bild: ">
                <img :src="product.image" alt="Produktbild" />
                </td>
                <td data-label="Artikelnummer: ">{{ product.article_number }}</td>
                <td data-label="Namn: ">{{ product.name }}</td>
                <td class="desc-col" data-label="Beskrivning: ">{{ product.description }}</td>
                <td data-label="Kategori: ">{{ product.category }}</td>
                <td data-label="Pris (kr): ">{{ product.price }}</td>
                <td data-label="Lagersaldo: ">{{ product.stock_quantity }}</td>
                <td class="action-col">
                <button class="update_btn" @click="handleEdit(product.id)">Uppdatera</button>
                <button class="delete_btn" @click="handleDelete(product.id)">Ta bort</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
    
<style scoped>
    table {
        width: 90%;
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
    .image-col {
        width: 80px;
    }
    .image-col img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        border-radius: 3px;
    }
    .desc-col {
        max-width: 250px;
        white-space: normal;
    }
    .update_btn {
        background-color: rgb(184, 115, 51, 0.6);
        color: #3E3E3E;
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 0.5em;
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
    /* RESPONSIV: varje rad blir "kort" på små skärmar */
    @media (max-width: 768px) {
        table, thead, tbody, th, td, tr {
            display: block;
        }
        thead tr {
            display: none;
        }
        tbody tr {
            margin-bottom: 1em;
            border: 1px solid #ccc;
            padding: 0.5em;
            border-radius: 5px;
        }
        td {
            display: flex;
            justify-content: space-between;
            padding: 0.3em 0.6em;
            border: none;
            border-bottom: 1px solid #eee;
            max-width: 100%;
            word-wrap: break-word;
        }
        .image-col, .desc-col {
            max-width: 100%;
            word-wrap: break-word;
        }
        td:last-child {
            border-bottom: 0;
        }
        td::before {
            content: attr(data-label);
            font-weight: bold;
            flex-basis: 40%;
        }
        .action-col {
            display: flex;
            gap: 0.5em;
            justify-content: center;
        }
        .image-col img {
            width: 60px;
            height: 60px;
        }
    }
</style>      