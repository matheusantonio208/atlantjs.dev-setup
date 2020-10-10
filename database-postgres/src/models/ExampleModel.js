import Sequelize, { Model } from 'sequelize';

class ExampleModel extends Model {
  static init(sequelize) {
    super.init(
      {
        itemA: Sequelize.STRING,
        itemB: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.OtherModel, { foreignKey: 'item_id', as: 'itemC' });
  }
}

export default ExampleModel;
