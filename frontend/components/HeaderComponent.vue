<script setup lang="ts">
const store = useUserStore();
const { token, user } = storeToRefs(store);
</script>

<template>
  <ClientOnly>
    <header>
      <Navbar expand="lg" border="bottom" background-color="light">
        <Container padding="2">
          <NavbarBrand>Stella Maris</NavbarBrand>
          <NavbarToggler />
          <NavbarCollapse>
            <NavbarNavList margin="e-auto b-2 b-lg-0">
              <NavItem text-alignment="center">
                <NavLink to="/">Inicio</NavLink>
              </NavItem>
              <NavItem text-alignment="center">
                <NavLink to="/novedades">Novedades</NavLink>
              </NavItem>
              <NavItem text-alignment="center" v-if="token && user">
                <NavLink to="/novedades/crear">Crear post</NavLink>
              </NavItem>
            </NavbarNavList>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  </ClientOnly>
</template>
