#define main terraform modules




#create resource group
resource "azurerm_resource_group" "rg" {
  name     = "battleship_terraform_rg"
  location = "westeurope"
}


#STATIC WEB APP
resource "azurerm_static_site" "battleship_static_site" {
  name                = "battleship-static-site"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}

#SQL SERVER


#BLOB STORAGE


#AZURE FUNCTIONS?