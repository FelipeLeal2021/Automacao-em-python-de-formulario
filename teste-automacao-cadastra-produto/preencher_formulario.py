import pyautogui
import time
import pyperclip
import pandas as pd

# Função para colar texto com suporte a acentuação
def escrever(texto):
    pyperclip.copy(str(texto))
    pyautogui.hotkey("ctrl", "v")
    time.sleep(0.4)

# Carrega o CSV com os produtos
produtos = pd.read_csv('produtos.csv')

print("Você tem 5 segundos para abrir o formulário no navegador e clicar no campo 'ID do Produto'.")
time.sleep(5)

for index, produto in produtos.iterrows():
    escrever(produto['id'])
    pyautogui.press("tab")
    
    escrever(produto['nome'])
    pyautogui.press("tab")
    
    escrever(produto['descricao'])
    pyautogui.press("tab")
    
    escrever(produto['preco'])
    pyautogui.press("tab")
    
    escrever(produto['quantidade'])
    pyautogui.press("tab")
    
    escrever(produto['categoria'])
    pyautogui.press("tab")
    
    pyautogui.press("enter")  # Envia o formulário
    
    print(f"Produto {produto['id']} enviado.")
    
    time.sleep(6)  # Tempo para o formulário recarregar
