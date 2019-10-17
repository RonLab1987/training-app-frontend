<template>
  <v-app>
    <v-navigation-drawer app fixed permanent>
      <div class="">
        <div class="display-1 pa-3 pt-6 text-center">O_o</div>
        <div class="display-title pa-3 text-center">all–is–graph</div>
      </div>

      <v-list class="home-nav-menu" flat>
        <v-list-item
          class="text-center"
          color="primary"
          :to="{ name: 'draftList' }"
        >
          <v-list-item-title>
            {{ $t('draftList.menu') }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
