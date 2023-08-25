'use client'

import ContactFormComponent from "@/components/ContactFormComponent/ContactFormComponent";
import { useRef, useState } from "react";

interface ContactFormValues {
    name: string;
    lastname: string;
    phone: string;
    mail: string;
    consultation: string;
}

interface ContactRadioValues {
    comercio: string,
    logistica: string,
    gestion: string,
    administracion: string,
    turismo_profesional: string,
    vehiculos: string,
    otros: string,
}

export default function ContactComponent() {
    const [formValues, setFormValues] = useState<ContactFormValues>({
        name: "",
        lastname: "",
        phone: "",
        mail: "",
        consultation: "",
    });
    const [radioValues, setRadioValues] = useState<ContactRadioValues>({
        comercio: "",
        logistica: "",
        gestion: "",
        administracion: "",
        turismo_profesional: "",
        vehiculos: "",
        otros: "",
    });
    const [errorMessage, setErrorMessage] = useState<string>("")
    const errorMessageTimerRef = useRef<NodeJS.Timeout | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.type === "checkbox") {
            const optionId = e.target.name;
            setRadioValues((prevRadioValues: any) => ({
                ...prevRadioValues,
                [optionId]: prevRadioValues[optionId] === "" ? e.target.value : "",
            }));
        } else {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (errorMessageTimerRef.current) {
            clearTimeout(errorMessageTimerRef.current);
        }

        const isAnyValueSelected = Object.values(radioValues).some((value) => value !== '');
        if (!isAnyValueSelected) {
            setErrorMessage('Seleccionar al menos un tema!');
            errorMessageTimerRef.current = setTimeout(() => {
                setErrorMessage('');
            }, 5000); // Tiempo de duración del mensaje: 5 segundos
            return;
        }

        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(formValues.phone)) {
            setErrorMessage('El campo de teléfono solo puede contener números.');
            errorMessageTimerRef.current = setTimeout(() => {
                setErrorMessage('');
            }, 5000); // Tiempo de duración del mensaje: 5 segundos
            return;
        }

        const response = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                formValues,
                radioValues
            })
        })
        const respuesta = await response.json();

        if (respuesta.message === "OKEY") {
            
            alert("Email enviado correctamente!")
            setFormValues({
                name: "",
                lastname: "",
                phone: "",
                mail: "",
                consultation: "",
            });
            setRadioValues({
                comercio: "",
                logistica: "",
                gestion: "",
                administracion: "",
                turismo_profesional: "",
                vehiculos: "",
                otros: "",
            })
        }
    };

    return <ContactFormComponent
        handleSubmit={handleSubmit}
        formValues={formValues}
        radioValues={radioValues}
        handleChange={handleChange}
        errorMessage={errorMessage}
    />
}