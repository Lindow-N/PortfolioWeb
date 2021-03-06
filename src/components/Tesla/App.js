
import './index.css';
import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';



class Tesla extends React.Component {

  render() {
    return (
<Fragment>
<header>
  
  <nav className="navbar bg-dark navbar-dark p-3">
    <div className="container">
      <img src="https://believemy.com/uploads/2f3811b9174e35a2d77902ffd36a9a37_4dfb82dd429edb6a11a81ff74e9abfc4.png" style={{height: '30px'}} className="mx-auto d-block"/>
    </div>
  </nav>
  
</header>


<div className="text-white py-5" style={{background: "center/cover url('https://believemy.com/uploads/126d05180ddf6f2ea67c8b669855bf89_e45c0e92710b43b3b938ed8fc4938f71.png')"}}>
  <div id="presentation" className="container">
    <h1 className="display-4">Bienvenue.</h1>
    <p>Le site Tesla vous permet de commander vos fusées et vos voitures, même lorsque vous êtes dans votre canapé.
      <span className="badge bg-success">Un conseillé est en ligne.</span></p>
  </div>
</div>



  
  <div className="container mt-5">
    
    
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width: "43%"}}></div>
    </div>
    
  
    <div className="alert alert-primary">
    Bienvenue sur Tesla. Ce site est en maintenance.
    <hr></hr>

      <div className="btn-group btn-block">
        <a className="btn btn-danger" href="#">Suivre les avancements</a>
        <a className="btn btn-success" href="#">Nous contacter</a>
      </div>
    </div>
    
    <nav>
     
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Accueil</a>
        </li>
        <li className="breadcrumb-item">
          Maintenance
        </li>
      </ul>
    </nav>
    
  </div>
  



  
  <div className="container">
    
 
    
    <div className="card mb-3 bg-secondary text-white">
      <img src="https://believemy.com/uploads/c7fe8837368024dc01e1845337f167e9_18fb807dabb97a3e4f920d1b0c9176b1.png" alt="..." className="card-img-top"></img>
      <div className="card-body">
        <h5 className="card-title">Nouveautés</h5>
        <p className="card-text">Vous pourrez bientôt acheter des fusées pour aller sur la lune.</p>
      </div>
    </div>
    
    <div className="card mb-3 bg-secondary text-white">
      <img src="https://believemy.com/uploads/c7fe8837368024dc01e1845337f167e9_18fb807dabb97a3e4f920d1b0c9176b1.png" alt="..." className="card-img-top"></img>
      <div className="card-header">Information</div>
      <div className="card-body">
        <h5 className="card-title">Nouveautés</h5>
        <p className="card-text">Les 30 premiers acheteurs de fusées partiront avec Elon Musk.</p>
      </div>
    </div>
      
  </div>
  



<section className="bg-dark text-white p-5">
  <div className="mx-auto w-75">
    <h2>Contactez-nous</h2>
    
    <form>
      <p>
        <label for="email">Adresse email</label>
        <input type="email" class="form-control" placeholder="Entrez votre adresse email" name="email" id="email"></input>
        <small className="text-muted">Nous ne partagerons pas votre adresse email.</small>
      </p>
      <p>
        <label for="message">Message</label>
        <textarea name="message" id="message" class="form-control" rows="3"></textarea>
      </p>
      <button type="submit" class="btn btn-outline-light mt-3">Soumettre</button>
    </form>
    
  </div>
</section>

<footer className="bg-secondary p-3">
  <div className="container">
    © Tesla
  </div>
</footer>

<Footer></Footer>
  </Fragment>
  );
}
}
export default Tesla;

