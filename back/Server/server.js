const express = require("express")
const {Sequelize , DataTypes,fn,col} = require("sequelize")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const sequelize = new Sequelize('bank','root','',{
    host:'localhost',
    dialect:'mysql',
});

const Client = sequelize.define('Client', {
    numcompt: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nom: DataTypes.STRING,
    solde: DataTypes.INTEGER,
  }, {
    tableName: 'clients',
    timestamps: false,
  });

  sequelize.sync({alter:false})
  .then(() => {
    console.log('Modèle synchronisé avec la base de données.');

    app.get('/GetAllClient', (req, res) => {
      Client.findAll()
        .then((client) => {
          res.json(client);
        })
        .catch((err) => {
          console.error('Erreur lors de la récupération des utilisateurs :', err);
          res.status(500).json({ error: 'Erreur serveur' });
        });
    });

    app.post("/AddClient",(req,res)=>{
        const {numcompt,nom,solde} =  req.body;
        Client.create({
            numcompt:numcompt,
            nom:nom,
            solde:solde
        })
        .then((client) => {
            res.json(client);
          })
          .catch((err) => {
            console.error('Erreur lors de l\'ajout du client :', err);
            res.status(500).json({ error: 'Erreur serveur' });
          });
    })
    //mamitina
    app.delete('/Delete/:id', (req, res) => {
        const id = req.params.id;
      
        Client.destroy({
          where: {
            numcompt: id,
          },
        })
          .then((rowCount) => {
            if (rowCount === 0) {
              res.status(404).json({ error: 'Client non trouvé' });
            } else {
              res.json({ message: 'Client supprimé avec succès' });
            }
          })
          .catch((err) => {
            console.error('Erreur lors de la suppression du client :', err);
            res.status(500).json({ error: 'Erreur serveur' });
          });
      });

      app.put('/update/:id', (req, res) => {
        const id = req.params.id;
        const { nom, solde } = req.body;
      
        Client.update({
          nom: nom,
          solde: solde,
        }, {
          where: {
            numcompt: id,
          },
        })
          .then(([rowCount]) => {
            if (rowCount === 0) {
              res.status(404).json({ error: 'Client non trouvé' });
            } else {
              res.json({ message: 'Client mis à jour avec succès' });
            }
          })
          .catch((err) => {
            console.error('Erreur lors de la mise à jour du client :', err);
            res.status(500).json({ error: 'Erreur serveur' });
          });
      });
      app.get('/GetTM', (req, res) => {
        Client.findOne({
          attributes: [
            [fn('SUM', col('solde')), 'totalSolde'],
            [fn('MAX', col('solde')), 'soldeMax'],
            [fn('MIN', col('solde')), 'soldeMin'],
          ],
          raw: true, // Pour obtenir les résultats sous forme d'objet JavaScript simple
        })
          .then((stats) => {
            res.json(stats);
          })
          .catch((err) => {
            console.error('Erreur lors du calcul des statistiques de solde :', err);
            res.status(500).json({ error: 'Erreur serveur' });
          });
      });
    const port = 8081;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}.`);
    });
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation du modèle :', err);
  });

  //jkgjjjjjjjjjjjjjjjjjjjjj ordino
  // tu est faux
  
  //Santatyra


  ///Antonio 