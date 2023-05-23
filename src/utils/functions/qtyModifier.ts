/**
 * Handle the type of the gift (delivery or pickup) and updates the active button
 */
export const handleType = (
  type: string,
  setActiveBtn: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isDelivery = type === 'delivery' ? true : false;
  setActiveBtn(isDelivery);
};

/**
 * Add quantity of the gift and updates the quantity and total values
 */
export const addQty = (
  qty: number,
  price: number | undefined,
  setQty: React.Dispatch<React.SetStateAction<number>>,
  setTotal: React.Dispatch<React.SetStateAction<number | undefined>>,
) => {
  if (price) {
    setQty(qty + 1);
    const totalValue = Number((price * (qty + 1)).toFixed(2));
    setTotal(totalValue);
  }
};

/**
 * Remove quantity of the gift and updates the quantity and total values
 */
export const removeQty = (
  qty: number,
  price: number | undefined,
  setQty: React.Dispatch<React.SetStateAction<number>>,
  setTotal: React.Dispatch<React.SetStateAction<number | undefined>>,
) => {
  if (price) {
    if (qty > 1) {
      setQty(qty - 1);
      const totalValue = Number((price * (qty - 1)).toFixed(2));
      setTotal(totalValue);
    }
  }
};
