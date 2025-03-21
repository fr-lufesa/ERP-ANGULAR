export class Reporte
{
    produccion!: Produccion;
    costoDirecto?: CostoDirecto;
    gastosIndirectos?: GastosIndirectos;
    financiamiento?: Financiamiento;
    impuestos?: Impuestos;
}

class Produccion
{
    neto!: string;
    local!: string;
    contratistas!: string;
}

class CostoDirecto
{
    neto!: string;
    materiales!: string;
    manoObraNomina!: string;
    manoObraImss!: string;
    subcontrato!: string;
    viaticos!: string;
    indirectosCampo!: string;
    margenBruto!: string;
}

class GastosIndirectos
{
    neto!: string;
    nominaAdministrativa!: string;
    serviciosPrivados!: string;
    imssInfonavit!: string;
    variables!: string;
    ebit!: string;
}

class Financiamiento
{
    neto!: string;
    prestamo!: string;
    inversion!: string;
    factoraje!: string;
    ebt!: string;
}

class Impuestos
{
    neto!: string;
    iva!: string;
    isr!: string;
    otros!: string;
    utilidadNeta!: string;

}