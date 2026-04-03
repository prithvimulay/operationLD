/*
Order Processing System that uses two enums: 
OrderStatus and PaymentMethod. 
Together, they demonstrate how enums bring structure and safety to a real domain model.

The Order class tracks an 
order's status, payment method, and total amount. 
It provides methods to advance the status through its lifecycle, cancel the order, and display order information.

The key insight is that enums control the valid transitions: an order can only move forward through the status chain (PLACED to CONFIRMED to SHIPPED to DELIVERED), and cancellation is only allowed before shipping.
*/




