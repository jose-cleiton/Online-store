import React from "react";
import { Link } from "react-router-dom";

export function ShoppingCartButton() {
  return (
    <Link to="/shopping-cart" data-testid="shopping-cart-button">
      <img src="cart-icon.png" alt="Carrinho de compras" />
    </Link>
  );
}

export function ShoppingCartPage() {
  return (
    <div>
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    </div>
  );
}
