import React, {Component} from 'react';

const MistakeCheckBox = (props) => {
    return(
        <div className="form-group">
            <div className="col-lg-3 text-right-lg">
                <label>Якась типова помилка вимови?</label>
            </div>
            <div className="col-lg-9">
                <div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="z_instead_of_theta"/>
                                /z/ замість /θ/
                        </label>
                    </div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="s_instead_of_theta"/>
                                /s/ замість /θ/
                        </label>
                    </div>
                </div>
                <div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="z_instead_of_eth"/>
                                /z/ замість /ð/
                        </label>
                    </div>
                    <div className="checkbox my-checkbox-inline">
                        <label>
                            <input type="checkbox" name="Mistakes" value="s_instead_of_eth"/>
                                /s/ замість /ð/
                        </label>
                    </div>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="Mistakes" value="other_not_in_th"/>
                            Помилка не в ⟨th⟩ (/θ/ або /ð/ звучать ок)
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="Mistakes" value="other"/>
                            Типова, але жодна з перелічених раніше
                    </label>
                </div>
            </div>
        </div>
    )
};

export  default MistakeCheckBox