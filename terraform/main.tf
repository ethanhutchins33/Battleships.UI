resource "azurerm_resource_group" "rg" {
  name     = "battleship-ui-rg"
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
    index_document = "index.html"
    error_404_document = "index.html"
  }
}