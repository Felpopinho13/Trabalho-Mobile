// #region Zona de Imports

import { Router } from "express";
import { CreateUserController } from "./controller/users/CreateUserController";
import { ListUsersController } from "./controller/users/ListUsersController";
import { UpdateUserController} from "./controller/users/UpdateUserController";
import { DeleteUserController} from "./controller/users/DeleteUserController";
import {AuthenticateUserController} from "./controller/users/AuthenticateUserController";

import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController} from "./controller/client/UpdateClientController";
import { DeleteClientController} from "./controller/client/DeleteClienteController";
import {AuthenticateClientController} from "./controller/client/AuthenticateClientController";

import { CreateSalesController } from "./controller/sales/CreateSalesController";
import { ListSalesController } from "./controller/sales/ListSalesController";
import { UpdateSalesController} from "./controller/sales/UpdateSalesController";
import { DeleteSalesController} from "./controller/sales/DeleteSalesController";
import { AuthenticateSalesController } from "./controller/sales/AuthenticateSalesController";

import { ensureAuthenticated} from "./midleware/ensureAuthenticated";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
import { AuthenticateCategoryController } from "./controller/category/AuthenticateCategoryController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController"; 
import { AuthenticateProductController } from "./controller/product/AuthenticateProductController";

// #endregion 

// #region Users CHECK
const autenticationUserController  = new AuthenticateUserController();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const router = Router();

router.post("/login", autenticationUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated)
router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
// #endregion

// #region Clients CHECK
const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

router.post("/consulta", authenticateClientController.handle);
router.post("/clients", createClientController.handle);

router.use(ensureAuthenticated)
router.get("/clients", listClientController.handle);
router.put("/clients/:id", updateClientController.handle);
router.delete("/clients/:id", deleteClientController.handle);
// #endregion

// #region Sales CHECK 
const authenticateSalesController = new AuthenticateSalesController();
const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();
const updateSalesController = new UpdateSalesController();
const deleteSalesController = new DeleteSalesController();

router.post("/validar", authenticateSalesController.handle);
router.post("/sales", createSalesController.handle);

router.use(ensureAuthenticated) 
router.get("/sales", listSalesController.handle);
router.put("/sales/:id", updateSalesController.handle);
router.delete("/sales/:id", deleteSalesController.handle);
// #endregion

// #region Category CHECK 
const authenticateCategoryController = new AuthenticateCategoryController();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

router.post("/ver", authenticateCategoryController.handle);
router.post("/category", createCategoryController.handle);

router.use(ensureAuthenticated) 
router.get("/category", listCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);
// #endregion

// #region Product 
const authenticateProductController = new AuthenticateProductController();
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

router.post("/olhar", authenticateProductController.handle);
router.post("/product", createProductController.handle);

router.use(ensureAuthenticated) 
router.get("/product", listProductController.handle);
router.put("/product/:id", updateProductController.handle);
router.delete("/product/:id", deleteProductController.handle);

// #endregion

export {router}