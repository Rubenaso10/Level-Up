
objeto_ejemplo = {
    "Modelo": "Mustang",
    "Marca": "Ford",
    "Año": 1964


}

llaves=[]
valores=[]

def objeto(datos):
   for x in datos:    # primer for que se utiliza para guardar cada key y ordenarlo en una lista
    llaves.append(x)
    
    llaves.sort()
    

   for y in llaves:   # segundo for que se utiliza para capturar el valor de cada key y guardarlo en una lista
        valor = datos.get(y)
        valores.append(valor)
        
        
  
   print(llaves,valores)
   
   

objeto(objeto_ejemplo)

