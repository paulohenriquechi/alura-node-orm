'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      // definindo chave estrangeira
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          // tabela a ser referenciada
          model: 'Pessoas',
          // coluna id como chave estrangeira
          key: 'id'
        }
      },
      nivel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Niveis',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turmas');
  }
};