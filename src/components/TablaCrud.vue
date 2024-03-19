  <!-- TablaCrud.vue -->
<template>
    <v-container class="mt-10">
      <div style="height: 60px;"></div>
      <v-data-table
        :headers="headers"
        :items="documents"
        item-key="id"
        :search="search"
        :loading="loading"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.clientName }}</td>
            <td>{{ item.documentType }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.dueDate }}</td>
            <td>{{ item.currency }}</td>
            <td>{{ item.total }}</td>
            <td>{{ item.status }}</td>
            <td>

              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
      <div class="pa-4 text-center">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-plus"
          text="Add New Item"
          variant="tonal"
          @click="openDialog"
        ></v-btn>

      </div>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
  data() {
    return {
      headers: [
        { title: 'Client Name', key: 'clientName' },
        { title: 'Document Type', key: 'documentType' },
        { title: 'Number', key: 'number' },
        { title: 'Date', key: 'date' },
        { title: 'Due Date', key: 'dueDate' },
        { title: 'Currency', key: 'currency' },
        { title: 'Total', key: 'total' },
        { title: 'Status', key: 'status' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      documents: [],
      loading: false,
      search: '',
      dialog: false,
      newItem: {
        clientName: '',
        documentType: '',
        number: '',
        date: '',
        dueDate: '',
        currency: '',
        total: '',
        status: '',
      },
      editedItem: {
        clientName: '',
        documentType: '',
        number: '',
        date: '',
        dueDate: '',
        currency: '',
        total: '',
        status: '',
      },
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.loading = true;
      axios.get('http://localhost:5000/documents')
        .then(response => {
          this.documents = response.data;
        })
        .catch(error => {
          console.error('Error fetching documents:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    editItem(item) {
  this.editedItem = { ...item }; // Copiar el item seleccionado a editedItem
  this.dialog = true; // Abrir la ventana modal de edición
},


    deleteItem(item) {
      const documentId = item.id;
      axios.delete(`http://localhost:5000/documents/${documentId}`)
        .then(response => {
          console.log('Document deleted:', response.data);
          this.fetchData();
        })
        .catch(error => {
          console.error('Error deleting document:', error);
        });
    },

    openDialog() {
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
    },

    saveNewItem() {
      const newItemData = { ...this.newItem };
      axios.post('http://localhost:5000/createdocuments', newItemData)
        .then(response => {
          console.log('New item added:', response.data);
          this.closeDialog();
          this.fetchData();
        })
        .catch(error => {
          console.error('Error adding new item:', error);
        });
    },

    saveEditedItem() {
      const editedItemData = { ...this.editedItem };
      axios.put(`http://localhost:5000/documents/${editedItemData.id}`, editedItemData)
        .then(response => {
          console.log('Item updated:', response.data);
          this.closeDialog();
          this.fetchData();
        })
        .catch(error => {
          console.error('Error updating item:', error);
        });
    },
  },
};

  </script>
  

  
  
  
  
  
  