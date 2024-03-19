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
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-card-title class="headline">New Item</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newItem.clientName" label="ClientName"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.documentType" label="DocumentType"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.number" label="Number"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.date" label="Date"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.dueDate" label="DueDate"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.currency" label="Currency"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.total" label="Total"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="newItem.status" label="Status"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="saveNewItem">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      // Implementar lógica para editar un documento
      console.log('Edit item:', item);
    },

    deleteItem(item) {
      const documentId = item.id; // Suponiendo que el ID del documento está en la propiedad 'id'
  
      axios.delete(`http://localhost:5000/documents/${documentId}`)
        .then(response => {
          console.log('Document deleted:', response.data);
          // Después de eliminar el documento, actualiza la lista de documentos
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

      console.log('New item:', newItemData);
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
  },
};
</script>