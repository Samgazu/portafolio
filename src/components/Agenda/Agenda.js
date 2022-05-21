import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';


export class Leo extends React.Component {
  
  render() {
    return (
        <div className="principal_component_base two_cards_base">
          <div className="agenda_card">
            <div className="card_title">
              <p>Agendar Cirugía</p>
            </div>
            <div className="card_body">
              <div className="two_columns">
                <div className="input_and_label">
                  <label>Fecha</label>
                  <input type="text" name="" placeholder=""/>
                </div>
                <div className="input_and_label">
                  <label>Hora</label>
                  <input type="text" name="" placeholder=""/>
                </div>
              </div>
                <div className="input_and_label">
                  <label>Ubicación</label>
                  <input type="text" name="" placeholder="Hospital, clínica, etc"/>
                </div>
                <div className="input_and_label">
                  <label>Producto</label>
                  <select>
                    <option>Seleccionar producto</option>
                  </select>
                </div>
                <div className="input_and_label">
                  <label>Datos del paciente</label>
                  <input type="text" name="" placeholder="Nombre(s)"/>
                  <input className="margin_top_base" type="text" name="" placeholder="Apellido"/>
                </div>
                <div className="input_and_label">
                  <label>Fecha de nacimiento del paciente</label>
                  <input type="text" name="" placeholder=""/>
                </div>
                <div className="input_and_label">
                  <label>Datos del doctor</label>
                  <input type="text" name="" placeholder="Nombre(s)"/>
                  <input className="margin_top_base" type="text" name="" placeholder="Apellido"/>
                </div>
            </div>
          </div>
          <div className="agenda_card">
            <div className="card_title">
              <p>Cotizar Producto</p>
            </div>
            <div className="card_body">
              <div className="title_text">
                <p className="bold_text">Descripción</p>
                <div><p>Estabilización mono-y poly segmental toraco-lumbar.</p></div>
                <div><p>Aplicación posterior.</p></div>
                <div><p>Bajo perfil.</p></div>
              </div>
                <div className="input_and_label">
                  <label>Cantidad de producto</label>
                  <select>
                    <option>0</option>
                  </select>
                </div>
                <div className="total_content">
                  <div>
                    <p>Subtotal</p>
                    <p>$0,00.00</p>
                  </div>
                  <div>
                    <p>Delivery</p>
                    <p>$0,00.00</p>
                  </div>
                  <div>
                    <p>Total</p>
                    <p>$0,00.00</p>
                  </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

Leo.propTypes = {
  //actions: PropTypes.object.isRequired,
 // fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Leo);
