
import React, { useState } from 'react'
import { DialogOverlay, DialogContent } from "@reach/dialog";
export default function Lista({ dataquery }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleDialog = () => setShowDialog(!showDialog);

  return <>

    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{dataquery.name}</h5>
        <small>{dataquery.agency}</small>
      </div>
      <button className="btn-primary" onClick={handleDialog}>Abrir</button>
    </div>
    <DialogOverlay isOpen={showDialog} onDismiss={handleDialog}>
      <DialogContent aria-label={showDialog ? "open" : "close"}
        style={{
          border: "solid 5px hsla(0, 0%, 0%, 0.5)",
          borderRadius: "10px",
        }}
      >
        <p>name : {dataquery.name}</p>
        <p>agency: {dataquery.agency}
        </p>
        <p>routes :<small>{dataquery.routes.length}</small>
        </p>

        <button onClick={handleDialog}>Cerrar</button>
      </DialogContent>
    </DialogOverlay>

  </>
}