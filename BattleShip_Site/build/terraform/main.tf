#define main terraform modules




#create resource group
resource "azurerm_resource_group" "rg" {
  name     = "battleship_terraform_rg"
  location = "westeurope"
}

resource "azurerm_storage_account" "static_storage" {
  name                     = "battleshipsstaticsite"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_kind             = "StorageV2"
  account_tier             = "Standard"
  account_replication_type = "GRS"
  enable_https_traffic_only = true

  static_website {
    index_document = "directory/battle-ships/index.html"
  }
}

#SQL SERVER


#BLOB STORAGE


#AZURE FUNCTIONS?