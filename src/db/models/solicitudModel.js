const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel");

const SOLICITUD_TABLE = "solicitudes";

const SolicitudSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cedulaPropietario: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cedula_propietario',
  },
  nombrePropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'nombre_propietario',
  },
  primerNombrePropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'primer_nombre_propietario',
  },
  segundoNombrePropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'segundo_nombre_propietario',
  },
  primerApellidoPropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'primer_apellido_propietario',
  },
  segundoApellidoPropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'segundo_apellido_propietario',
  },
  direccionPropietario:{
    type: DataTypes.STRING,
    allowNull: true,
    field: 'direccion_propietario',
  },
  municipioPropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'municipio_propietario',
  },
  celularPropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'celular_propietario',
  },
  correoPropietario: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'correo_propietario',
  },

  /* tarjeta de propiedad */
  licenciaTransito: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'licencia_transito',
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'placa',
  },
  vin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chasis:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'marca',
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'tipo',
  },
  servicio:{
    type: DataTypes.STRING,
    allowNull: true,
  },

  /* persona autorizada */
  cedulaPersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'cedula_persona_auth',
  },
  nombrePersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'nombre_persona_auth',
  },
  primerNombrePersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'primer_nombre_persona_auth',
  },
  segundoNombrePersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'segundo_nombre_persona_auth',
  },
  primerApellidoPersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'primer_apellido_persona_auth',
  },
  segundoApellidoPersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'segundo_apellido_persona_auth',
  },
  direccionPersonAuth:{
    type: DataTypes.STRING,
    allowNull: true,
    field: 'direccion_persona_auth',
  },
  municipioPersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'municipio_persona_auth',
  },
  celularPersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'celular_persona_auth',
  },
  correoPersonAuth: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'correo_persona_auth',
  },

  /* imagenes adjuntas */
  fotoUsuario: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'foto_usuario',
  },
  cedulaPropietarioFrontal: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cedula_propietario_frontal',
  },
  cedulaPropietarioTrasera: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cedula_propietario_trasera',
  },
  tarjetaPropiedadFrontal: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'tarjeta_propiedad_frontal',
  },
  tarjetaPropiedadTrasera: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'tarjeta_propiedad_trasera',
  },
  cedulaPersonAuthFrontal: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cedula_persona_auth_frontal',
  },
  cedulaPersonAuthTrasera: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cedula_persona_auth_trasera',
  },
  firma: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'firma',
  },
  huella: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'huella',
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Solicitud extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SOLICITUD_TABLE,
      modelName: 'Solicitud',
      timestamps: false
    }
  }
}

module.exports = {
  SOLICITUD_TABLE,
  SolicitudSchema,
  Solicitud
}