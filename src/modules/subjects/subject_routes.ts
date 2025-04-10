import express from 'express';
import {
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    getUsersBySubjectIdHandler
} from '../subjects/subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea un nuevo subjecte
 *     description: Añade los detalles de un nuevo subjecte.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Subjecte creado exitosamente
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todos los subjectes
 *     description: Retorna una lista de todos los subjectes.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   teacher:
 *                     type: string
 *                   alumni:
 *                     type: array
 *                     items:
 *                       type: string
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene un subjecte por ID
 *     description: Retorna los detalles de un subjecte específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: Subjecte no encontrado
 */
router.get('/subjects/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza un subjecte por ID
 *     description: Modifica los detalles de un subjecte específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Subjecte actualizado exitosamente
 *       404:
 *         description: Subjecte no encontrado
 */
router.put('/subjects/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina un subjecte por ID
 *     description: Elimina un subjecte específico de la base de datos.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subjecte eliminado exitosamente
 *       404:
 *         description: Subjecte no encontrado
 */
router.delete('/subjects/:id', deleteSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}/users:
 *   get:
 *     summary: Obtiene todos los usuarios de un subjecte por ID
 *     description: Retorna una lista de todos los usuarios que están cursando un subjecte específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   age:
 *                     type: integer
 *                   email:
 *                     type: string
 *       404:
 *         description: Subjecte no encontrado
 */
router.get('/subjects/:id/users', getUsersBySubjectIdHandler);

export default router;