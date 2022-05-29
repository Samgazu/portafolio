import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './sass/styles.sass';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpecificDescriptionQuotation } from '../../actions/newQuoteAction';
import shortid from 'shortid';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router';


export const CardQuoteDescription = () => {

  const [values, setValues] = useState([{
    id: shortid.generate(),
    productQuantity: 1,
    product: {
      productDescription: null
    },
    productPrice: 0,
    discountPercentage: 0,
  }]);
  const [globalSubtotal, setGlobalSubtotal] = useState({});
  const [titulo, setTitulo] = useState('');
  const dispatch = useDispatch();
  const specificDescriptionQuotation = useSelector(state => state.newQuote.SpecificDescriptionQuotationItems);
  let { orden_solicitada_1 } = useParams();

  useEffect(() => {
    calculateGlobalSubtotal();
  }, [values])


  useEffect(() => {
    if (specificDescriptionQuotation) {
      setTitulo(specificDescriptionQuotation.name);
      setValues(specificDescriptionQuotation.values);
    }
  }, [])

  useEffect(() => {

    let products = values.filter(item => {
      if (
        item['product']
        && item['product']['productDescription']
        && item['productPrice'] !== 0
        && item['productQuantity']) {
        return item
      }
    })
    if (products && products.length > 0) {
      dispatch(updateSpecificDescriptionQuotation({ name: titulo, values: products }))
    } else if (!orden_solicitada_1 && products && products.length === 0) {
      dispatch(updateSpecificDescriptionQuotation(null))
    }
  }, [values, titulo])

  const handleChangeIntoTypeOfMoney = (number) => {
    if (number) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = '$1,';
      let arr = number.toString().split('.');
      arr[0] = arr[0].replace(exp, rep);
      return `$${arr[1] ? arr.join('.') : arr[0]}`;
    }
  }

  const calculateSubTotal = (p) => {
    let i = 0;
    values.forEach((item, index) => {
      item.id === p.id && (i = index)
    })
    const productQuantity_ = isNaN(parseFloat(values[i].productQuantity)) ? 0 : parseInt(values[i].productQuantity);
    const productPrice_ = isNaN(parseFloat(values[i].productPrice)) ? 0 : parseFloat(values[i].productPrice);
    const discountPercentage_ = isNaN(parseFloat(values[i].discountPercentage)) ? 0 : parseFloat(values[i].discountPercentage) / 100;
    return (productQuantity_ * productPrice_ * (1 - discountPercentage_)).toFixed(2)
  }

  const calculateGlobalSubtotal = () => {
    if (values.length > 0) {
      const subTotals = values.map((item) => parseFloat(calculateSubTotal(item)));
      const subTotal = _.reduce(subTotals, function (sum, n) {
        return sum + n;
      }).toFixed(2);
      setGlobalSubtotal({
        subTotal: subTotal,
        iva: (subTotal * 0.16).toFixed(2),
        total: (subTotal * 1.16).toFixed(2),
      });
    } else if (values.length === 0) {
      setGlobalSubtotal({
        subTotal: 0,
        iva: 0,
        total: 0,
      });
    }
  };


  const renderItem = (p) => {
    return (
      <div>
        <div key={p.id} className={'tableBody'}>
          <div className={orden_solicitada_1 ? 'element2' : 'element'}>
            <p>
              {
                !orden_solicitada_1 &&
                //valor por cantidad
                <input
                  className={'form-inputs'}
                  name={'productQuantity'}
                  type="number"
                  autoComplete="off"
                  min="1"
                  onChange={(e) => {
                    const productQuantity = e.target.value >= 1 ? parseFloat(e.target.value) : 1
                    setValues((currentPeople) => currentPeople.map(x => x.id === p.id ? {
                      ...x,
                      productQuantity
                    } : x));
                  }}
                  value={p.productQuantity}
                />

              }
              {
                orden_solicitada_1 &&
                p.productQuantity
              }
            </p>
          </div>
          <div className={orden_solicitada_1 ? 'element2' : 'element'}>
            <p>
              {
                !orden_solicitada_1 &&
                //Descripcion de producto
                <div>
                  <input
                    className={'form-inputs'}
                    name={'productDescription'}
                    type="text"
                    placeholder='--'
                    autoComplete='off'
                    onChange={(e) => {
                      const productDescription = e.target.value;
                      setValues((currentPeople) => currentPeople.map(x => x.id === p.id ? {
                        ...x,
                        product: { productDescription: productDescription }
                      } : x));
                    }}
                    value={p.product && p.product.productDescription && p.product.productDescription}
                  >
                  </input>
                </div>

              }
              {
                orden_solicitada_1 &&
                p.product && p.product.productDescription && p.product.productDescription
              }
            </p>
          </div>
          <div className={orden_solicitada_1 ? 'element2' : 'element'}>
            <p>
              {
                !orden_solicitada_1 &&
                <NumberFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  className={'form-inputs'}
                  inputmode="numeric"
                  decimalScale={2}
                  allowNegative={false}
                  fixedDecimalScale={true}
                  value={p.productPrice}
                  onValueChange={(values) => {
                    const { value } = values;

                    setValues((currentPeople) => currentPeople.map(x => x.id === p.id ? {
                      ...x,
                      productPrice: parseFloat(value) >= .01 ? parseFloat(value) : 1
                    } : x))
                  }} />
              }
              {
                orden_solicitada_1 &&
                (p.productPrice
                  ? Number(p.productPrice).toLocaleString(
                    'en-US',
                    {
                      style: 'currency',
                      currency: 'USD',
                      currencyDisplay: 'symbol',
                    }
                  )
                  : `$ ${p.productPrice}.00`)
              }
            </p>
          </div>
          <div className={orden_solicitada_1 ? 'element2' : 'element'}>
            <p>
              {
                !orden_solicitada_1 &&
                <input
                  className={'form-inputs'}
                  name={'discountPercentage'}
                  autoComplete="off"
                  onChange={(e) => {
                    const discountPercentage = (parseFloat(e.target.value.replace(/[%.]/g, '')) <= 100 && parseFloat(e.target.value.replace(/[%.]/g, '')) >= 0)
                      ? parseFloat(e.target.value.replace(/[%.]/g, ''))
                      : 0;
                    setValues((currentPeople) => currentPeople.map(x => x.id === p.id ? {
                      ...x,
                      discountPercentage
                    } : x));
                  }}
                  value={p.discountPercentage ? `${p.discountPercentage}%` : '0%'}
                />
              }
              {
                orden_solicitada_1 &&
                `${p.discountPercentage}%`
              }
            </p>
          </div>
          <div className={orden_solicitada_1 ? 'element2' : 'element'}>
            <p>
              {
                //calcular subtotal
                handleChangeIntoTypeOfMoney(
                  calculateSubTotal(p)
                )
              }
            </p>
          </div>
          {
            !orden_solicitada_1 &&
            <button className='delete_button' onClick={() => {
              setValues(currentPeople => currentPeople.filter(x => x.id !== p.id))
            }}>
              <CloseIcon></CloseIcon>
            </button>
          }
        </div>
      </div>
    );
  };

  const renderGlobalPrice = () => {
    return (
      <div className={'tableBody'}>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p></p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p></p>
        </div>
        <div className={orden_solicitada_1 ? 'element2' : 'element'}>
          <p></p>
        </div>
        <div className={'element priceResumenContainer'}>
          <p className={'title'}>Subtotal</p>
          <p className={'title'}>IVA</p>
          <p className={'title'}>Total</p>
        </div>
        <div className={'element priceResumenContainer'}>
          <p className={'value'}>{globalSubtotal.subTotal ? handleChangeIntoTypeOfMoney(globalSubtotal.subTotal) : '$0.00'}</p>
          <p className={'value'}>{globalSubtotal.iva ? handleChangeIntoTypeOfMoney(globalSubtotal.iva) : '$0.00'}</p>
          <p className={'value'}>{globalSubtotal.total ? handleChangeIntoTypeOfMoney(globalSubtotal.total) : '$0.00'}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={'whiteCardBase'}>
        <div className={'whiteCardContent'}>
          <div className={'titleContent'}>
            <p>
              {
                !orden_solicitada_1 &&
                <div>
                  <input
                    className={'input-tittle'}
                    id={'productTittle'}
                    value={titulo}
                    placeholder='Nombre Descripción Específica'
                    name={'productTittle'}
                    type="text"
                    autoComplete='off'
                    onChange={(event) => { setTitulo(event.target.value) }}
                  >
                  </input>
                </div>
              }
              {
                orden_solicitada_1 && titulo
              }
            </p>
          </div>
          <div className={'tableContent'}>
            <div className={'tableHeader'}>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Cantidad</p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Descripción</p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>
                  Precio Unit.
                </p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Descuento</p>
              </div>
              <div className={orden_solicitada_1 ? 'element2' : 'element'}>
                <p>Subtotal</p>

              </div>
            </div>

            {
              values.length > 0 && values.map(p => {
                return renderItem(p)
              })
            }
            {renderGlobalPrice()}
          </div>
        </div>
        {/* Agregar funcionalidad para agregar nuevo profucto a card y que no se cree un nuevo card */}
        {
          !orden_solicitada_1 &&
          <button className={'addButton'} onClick={() => {
            setValues(currentPeople => [...currentPeople, {
              id: shortid.generate(),
              productQuantity: 1,
              product: {
                productDescription: null
              },
              productPrice: 0,
              discountPercentage: 0,
            }])
          }
          }>
            <AddIcon />
          </button>
        }
      </div>
    </div>
  );
};

CardQuoteDescription.propTypes = {
  system: PropTypes.any,
  edit: PropTypes.any,
  systemIndex: PropTypes.any,
  configurationIndex: PropTypes.any,
  configuration: PropTypes.any,
  handleCardQouteChange: PropTypes.any,
  newQuote: PropTypes.any,
};
