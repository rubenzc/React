import React, { Component} from 'react';

class Formulario extends Component {

    categoriaRef = React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();
        
        //console.log(this.categoriaRef.current.value);
        //enviar por props
        this.props.consultarNoticias(this.categoriaRef.current.value);
    }

    render() { 
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.cambiarCategoria}>
                        <h2>News by category</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoriaRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">General</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Search"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default Formulario;