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
import {AuthenticateClientController} from "./controller/client/AuthenticateUserController";

import { CreateSalesController } from "./controller/sales/CreateSalesController";
import { ListSalesController } from "./controller/sales/ListSalesController";
import { UpdateSalesController} from "./controller/sales/UpdateSalesController";
import { DeleteSalesController} from "./controller/sales/DeleteSalesController";
import { AuthenticateSalesController } from "./controller/sales/AuthenticateSalesController";

import { ensureAuthenticated} from "./midleware/ensureAuthenticated";

// #endregion 

// #region Users
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

// #region Clients
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

// #region Sales
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

export {router}